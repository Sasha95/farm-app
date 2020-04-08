import React, { FC } from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStylesDrawer, LinkStyles } from "./ItemDrawerStyles";
import { Link } from "react-router-dom";

interface IProps {
    title: string;
    rowIndex: number;
    selectedIndex: number;
    link: string;
    handleListItemClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, rowIndex: number) => void;
}

export const ItemDrawer: FC<IProps> = ({ title, rowIndex, selectedIndex, link, handleListItemClick }) => {
    const classes = useStylesDrawer();
    const links = LinkStyles();

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <Link className={links.link} to={`/${link}`}>
                <ListItem
                    button
                    selected={selectedIndex === rowIndex}
                    onClick={(event) => handleListItemClick(event, rowIndex)}>
                    <ListItemText primary={title} />
                </ListItem>
            </Link>
        </List>
    )
}