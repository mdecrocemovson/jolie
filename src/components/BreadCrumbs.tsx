import { Breadcrumbs, Typography, Link } from "@mui/material";

const BreadCrumbs = ({ links }: { links: any[] }) => {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        {/* {links && links.map((link) => <Link href={link.href}>{link.name}</Link>)} */}
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
};

export { BreadCrumbs };
