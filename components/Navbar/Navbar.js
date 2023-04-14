import Link from "next/link";
import { Grid, Header, Button } from "semantic-ui-react";

export default function Navbar() {
  const styles = {
    grid: { marginTop: "10px" },
    link: { fontSize: "18px" },
    linkColumn: { marginTop: "10px" },
  };

  return (
    <Grid container style={styles.grid}>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h1">Dhaivick</Header>
        </Grid.Column>

        <Grid.Column width={2} style={styles.linkColumn}>
          <Link href="/" style={styles.link}>
            Home
          </Link>
        </Grid.Column>

        <Grid.Column width={2} style={styles.linkColumn}>
          <Link href="/projects" style={styles.link}>
            Projects
          </Link>
        </Grid.Column>

        <Grid.Column width={2} style={styles.linkColumn}>
          <Link href="/blog" style={styles.link}>
            Blog
          </Link>
        </Grid.Column>

        <Grid.Column width={2} style={styles.linkColumn}>
          <Link href="/contact" style={styles.link}>
            Contact
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
