import React from "react";
import Navbars from "../../../Components/Navbars/Navbars";
import { Table } from "@nextui-org/react";

const Dashboard = () => {
  return (
    <>
      <Table
        aria-label="Example static collection table with multiple selection"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="multiple"
      >
        <Table.Header>
          <Table.Column>TName</Table.Column>
          <Table.Column>ROLE</Table.Column>
          <Table.Column>STATUS</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>Tony Reichert</Table.Cell>
            <Table.Cell>CEO</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>Zoey Lang</Table.Cell>
            <Table.Cell>Technical Lead</Table.Cell>
            <Table.Cell>Paused</Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>Jane Fisher</Table.Cell>
            <Table.Cell>Senior Developer</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>William Howard</Table.Cell>
            <Table.Cell>Community Manager</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default Dashboard;
