import Navbar from "../components/Navbar/Navbar";
import { Grid, Header } from "semantic-ui-react";

export default function Projects() {
  return (
    <div>
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
