import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TLoginValues } from "../components/Form/LoginForm/LoginFormSchema";
import { TRegisterValues } from "../components/Form/RegisterForm/RegisterFormSchema";
import { api } from "../services/api";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUser {
  id: number;
  email: string;
}

interface iUserContext {
  user: iUser | null;
  navigate: (string: string) => void;
  doRegister: (formData: TRegisterValues) => Promise<void>;
  doLogin: (formData: TLoginValues) => Promise<void>;
  doLogout: () => void;
}

interface iUserResponse {
  accessToken: string;
  user: iUser;
}

export const userContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID");
        if (token) {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data: userData } = await api.get(`/users/${id}`);
          delete userData.password;
          setUser(userData);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        navigate("/");
      }
    };
    loadUser();
  }, []);

  const doRegister = async (formData: TRegisterValues) => {
    try {
      await api.post<iUserResponse>("signup", formData);
      toast.success("Cadastro realizado com sucesso");
      navigate("/login");
    } catch (error) {
      const currentError = error as AxiosError<string>;
      if (currentError.response?.data.includes("Email")) {
        toast.error("Email já cadastrado");
      } else {
        console.log(error);
      }
    }
  };

  const doLogin = async (formData: TLoginValues) => {
    try {
      const { data: userInfo } = await api.post<iUserResponse>(
        "signin",
        formData
      );
      toast.success("Login efetuado com sucesso");
      api.defaults.headers.common.authorization = `Bearer ${userInfo.accessToken}`;
      localStorage.setItem("@TOKEN", userInfo.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(userInfo.user.id));
      setUser(userInfo.user);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Dados inválidos. Tente novamente");
    }
  };

  const doLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  };

  return (
    <userContext.Provider value={{ user, navigate, doRegister, doLogin, doLogout }}>
      {children}
    </userContext.Provider>
  );
};
