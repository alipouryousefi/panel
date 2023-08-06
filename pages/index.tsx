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

export default function Home({ personsArray, totalCount }: HomeProps) {
  const [isToggled, toggle] = useToggle(false);
  const [persons, setPersons] = useState<Person[]>([...personsArray]);
  const [page, setPage] = useState<number>(1);
  const { error, isSuccess, loading, sendRequest } = useApi();

  const updatePersonsList = async (pageNumber: number = 1) => {
    //close modal before update list
    toggle(false);
    const res = await sendRequest("GET", `/api/persons?page=${pageNumber}`);
    setPersons([...res.data.personsArray]);
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
        count={totalCount}
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
export async function getServerSideProps({ query }: any) {
  const page = Number(query.page) || 1;

  const res = await fetch(`http://localhost:3000/api/persons?page=${page}`);
  const { personsArray, totalCount } = await res.json();

  return {
    props: { personsArray, totalCount },
  };
}
