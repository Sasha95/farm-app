import React, { useState, FC } from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useStylesDrawer, LinkStyles } from "./ItemDrawerStyles";
import { Link } from "react-router-dom";
import { IDictionary } from "../../utils/interfaces";

interface IProps {
  title: string;
  listItems:  IDictionary<string>[] 
}

export const ItemListDrawer: FC<IProps> = ({ title, listItems }) => {
  const classes = useStylesDrawer();
  const links = LinkStyles();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {listItems.map((item, index) => (
          <List component="div" disablePadding>
            <Link className={links.link} to={`/${Object.keys(item)[0]}`}>
              <ListItem
                button
                className={classes.nested}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}>
                <ListItemText primary={Object.values(item)[0]} key={index} />
              </ListItem>
            </Link>
          </List>
        ))}
      </Collapse>

    </List>
  )
}