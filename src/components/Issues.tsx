import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { Politician } from "../../lib/generated/politics-service";

const Issues = ({ politician }: { politician: Politician }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h4>
        {politician?.firstName} {politician?.lastName} on
      </h4>
      <List>
        {politician.issues?.map((issue) => {
          return (
            <ListItem disablePadding>
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
