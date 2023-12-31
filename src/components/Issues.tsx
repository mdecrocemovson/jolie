import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { Politician } from "../../lib/generated/jolie-service";

const Issues = ({ politician }: { politician?: Politician }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4>
        {politician?.firstName} {politician?.lastName} on
      </h4>
      <List>
        {politician &&
          politician.issues?.map((issue) => {
            return (
              <ListItem key={issue?.description} disablePadding>
                <Link href={`${politician.id}/${issue?.name}`}>
                  {issue?.name}
                </Link>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export { Issues };
