import Navbar from "../components/Navbar/Navbar";
import { Grid, Header } from "semantic-ui-react";
import Head from "next/head";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>

      <Navbar />
      <Grid container textAlign="center" verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16} style={{ margin: "10px" }}>
            <Header as="h1" style={{ textDecoration: "underline" }}>
              Projects
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
