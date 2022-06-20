import React from "react";
import { useQuery } from "@apollo/client";
import Client from "./Client";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinner from "./Spinner";

const Clients = () => {
  const { loading, errors, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (errors) return <p>Error</p>;

  return (
    <>
      {!loading && !errors && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <Client key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
