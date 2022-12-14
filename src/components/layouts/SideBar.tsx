import {
  Collapse,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  List,
  Typography,
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/SideBar.module.css';

type Props = {
  allPostSlugs: {
    params: {
      slug: string;
    };
  }[];
};

const SideBar: React.FC<Props> = ({ allPostSlugs }) => {
  const [pagesOpen, setPagesOpen] = useState(true);
  const [languageOpen, setLanguageOpen] = useState(true);

  const handlePagesClick = () => {
    setPagesOpen(!pagesOpen);
  };

  const handleLanguagesClick = () => {
    setLanguageOpen(!languageOpen);
  };

  return (
    <nav className={styles.navigation}>
      <section className={styles.languages}>
        <List>
          <ListItemButton onClick={handleLanguagesClick}>
            <ListItemIcon>
              <LanguageOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">Languages</Typography>
            </ListItemText>
          </ListItemButton>
          <Collapse in={languageOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding id="wovn-languages" />
          </Collapse>
        </List>
      </section>
      <section className={styles.menu}>
        <List>
          <ListItemButton onClick={handlePagesClick}>
            <ListItemIcon>
              <MenuBookOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">Pages</Typography>
            </ListItemText>
          </ListItemButton>
          <Collapse in={pagesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {allPostSlugs &&
                allPostSlugs.map((value) => (
                  <ListItemButton key={value.params.slug} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Link href={`/posts/${value.params.slug}`}>
                        <Typography variant="body1">
                          {value.params.slug}
                        </Typography>
                      </Link>
                    </ListItemText>
                  </ListItemButton>
                ))}
            </List>
          </Collapse>
        </List>
      </section>
    </nav>
  );
};

export default SideBar;
