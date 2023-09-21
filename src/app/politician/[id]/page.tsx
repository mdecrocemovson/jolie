"use client";

import { useParams } from "next/navigation";
import { useGetPoliticianQuery } from "../../../../lib/generated/jolie-service";
import { client } from "../../../../graphql/schemas/graphqlClient";
import { BreadCrumbs } from "@/components/BreadCrumbs";
import { Issues } from "@/components/Issues";

const Politician = () => {
  const { id, issue } = useParams();
  const { data, isLoading } = useGetPoliticianQuery(client, {
    id: id as string,
  });
  const politician = data?.fetchPolitician;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <BreadCrumbs links={[]} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>
          {politician?.firstName} {politician?.lastName}
        </h1>
        <p>{politician?.description}</p>
      </div>
      <Issues politician={politician || {}} />
    </>
  );
};

export default Politician;
