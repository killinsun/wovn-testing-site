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
        <script async src="https://global.localizecdn.com/localize.js"/>
        <script src="https://j.wovn.io/1" data-wovnio="key=vguCpy" async />
        <script>
          {`!function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","getSourceLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off","hideWidget","showWidget"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);`}
        </script>
        <script>
          {`Localize.initialize({ key: 'npp8wK1UchWon', rememberLanguage: true, });`}
        </script>
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
