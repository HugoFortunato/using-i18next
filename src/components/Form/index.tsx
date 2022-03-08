import React from "react";
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

type DataProps = {
  age: number;
  firstName: string;
};

export function Form({ idURL }: any) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });
  const onSubmit = (data: DataProps | any) => {
    if (data.age && data.firstName !== "") {
      return navigate(`/description/${idURL}`);
    } else {
      console.log("kkkkkkk");
    }
  };

  return (
    <S.WrapperForm>
      <h1>{t("Preencha o formulário para seguir em frente")}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName")}
          style={{ marginBottom: "20px" }}
        ></input>
        <p>{errors.firstName?.message}</p>
        <input {...register("age")}></input>
        <p>{errors.age?.message}</p>
        <input type="submit" />
      </form>
    </S.WrapperForm>
  );
}
