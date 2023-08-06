import {
  CustomButton,
  CustomModal,
  TableContent,
  CreatePerson,
  Pagination,
  Loading,
} from "@/components";
import { useApi, useToggle } from "../hook";
import { HomeProps, Person } from "@/types";
import { useState } from "react";
import {
  BlurOverlayContainer,
  ButtonWrapper,
  MainWrapper,
} from "@/styles/styles";
import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";

export default function Home({ personsArray, totalCount }: HomeProps) {
  const [isToggled, toggle] = useToggle(false);
  const [count, setCount] = useState<number>(totalCount);
  const [persons, setPersons] = useState<Person[]>([...personsArray]);
  const [page, setPage] = useState<number>(1);
  const { error, isSuccess, loading, sendRequest } = useApi();

  const updatePersonsList = async (pageNumber: number = 1) => {
    //close modal before update list
    toggle(false);
    // @ts-ignore
    const res: AxiosResponse<{ personsArray: Person[]; totalCount: number }> =
      await sendRequest("GET", `/api/persons?page=${pageNumber}`);
    setPersons([...res.data.personsArray]);
    setCount(res.data.totalCount);
    setPage(pageNumber);
  };

  return (
    <MainWrapper>
      {loading && (
        <BlurOverlayContainer>
          <Loading />
        </BlurOverlayContainer>
      )}
      <ButtonWrapper>
        <CustomButton title="ایجاد کاربر" onClick={toggle} size="large" />
      </ButtonWrapper>
      <TableContent persons={persons} page={page} />
      <Pagination
        count={count}
        page={page}
        updatePersonsList={updatePersonsList}
      />
      <CustomModal onClose={toggle} open={isToggled} title="ایجاد کاربر جدید">
        <CreatePerson updatePersonsList={updatePersonsList} />
      </CustomModal>
    </MainWrapper>
  );
}

//get data on server
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = Number(query.page) || 1;

  try {
    const response = await axios.get(
      `http://localhost:3000/api/persons?page=${page}`
    );
    const { personsArray, totalCount } = response.data;

    return {
      props: { personsArray, totalCount },
    };
  } catch (error) {
    return {
      props: { personsArray: [], totalCount: 0 }, // Return empty data in case of an error
    };
  }
};
