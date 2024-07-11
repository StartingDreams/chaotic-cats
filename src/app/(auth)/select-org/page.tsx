import { OrganizationList } from "@clerk/nextjs";

function SelectOrgPage() {
  return (
    <OrganizationList
      afterSelectOrganizationUrl="/admin"
      afterSelectPersonalUrl="/dashboard"
    />
  );
}

export default SelectOrgPage;
