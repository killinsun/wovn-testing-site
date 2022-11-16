import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Head from 'next/head';
import Header from './Header';
import SideBar from './SideBar';
import utilStyle from '../../styles/utils.module.css';

type Props = {
  children: React.ReactNode;
  allPostSlugs: {
    params: {
      slug: string;
    };
  }[];
};

const Layout: React.FC<Props> = (props) => {
  const { children, allPostSlugs } = props;

  return (
    <Container className={utilStyle.container}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* <script src="https://j.dev-wovn.io/1" data-wovnio="key=PbZlZg" async /> */}
        {/* <script src="https://j.wovn.io/1" data-wovnio="key=vguCpy" async /> */}
        <script src="https://j.staging5-wovn.com/1" data-wovnio="key=NGzPth" async />
      </Head>
      <Grid container>
        <Grid md={12} xs={12}>
          <Header />
        </Grid>
        <Grid md={3} sm={0}>
          <SideBar allPostSlugs={allPostSlugs} />
        </Grid>
        <Grid md={9} sm={12}>
          <main className={utilStyle.mainContent}>{children}</main>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
