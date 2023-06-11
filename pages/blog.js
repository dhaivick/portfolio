import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { Grid, Feed, Label, Icon, Header } from "semantic-ui-react";

export default function Blog() {
  const date = "3 days ago";
  const summary = "React JS Cheat Sheet";
  const extraText = "React is a UI library for creating user interfaces";

  return (
    <div>
      <Navbar />
      <Grid container textAlign="center" verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16} style={{ margin: "10px" }}>
            <Header as="h1" style={{ textDecoration: "underline" }}>
              Blog
            </Header>
          </Grid.Column>

          <Grid.Column width={16} style={{ marginTop: "30px" }}>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content={date} />
                  <Link href="#">
                    <Feed.Summary
                      content={summary}
                      style={{ color: "#0000EE" }}
                    />
                  </Link>
                  <Feed.Extra text content={extraText} />
                </Feed.Content>
                <Feed.Meta>
                  <Label as="a" horizontal>
                    Technology
                    <Icon name="delete" />
                  </Label>
                  <Label as="a" horizontal>
                    MERN
                    <Icon name="delete" />
                  </Label>
                </Feed.Meta>
              </Feed.Event>
            </Feed>
          </Grid.Column>

          <Grid.Column width={16} style={{ marginTop: "30px" }}>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content={date} />
                  <Link href="#">
                    <Feed.Summary
                      content={summary}
                      style={{ color: "#0000EE" }}
                    />
                  </Link>
                  <Feed.Extra text content={extraText} />
                </Feed.Content>
                <Feed.Meta>
                  <Label as="a" horizontal>
                    Technology
                    <Icon name="delete" />
                  </Label>
                  <Label as="a" horizontal>
                    MERN
                    <Icon name="delete" />
                  </Label>
                </Feed.Meta>
              </Feed.Event>
            </Feed>
          </Grid.Column>

          <Grid.Column width={16} style={{ marginTop: "30px" }}>
            <Feed>
              <Feed.Event>
                <Feed.Content>
                  <Feed.Date content={date} />
                  <Link href="#">
                    <Feed.Summary
                      content={summary}
                      style={{ color: "#0000EE" }}
                    />
                  </Link>
                  <Feed.Extra text content={extraText} />
                </Feed.Content>
                <Feed.Meta>
                  <Label as="a" horizontal>
                    Technology
                    <Icon name="delete" />
                  </Label>
                  <Label as="a" horizontal>
                    MERN
                    <Icon name="delete" />
                  </Label>
                </Feed.Meta>
              </Feed.Event>
            </Feed>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
