import { OrganizationList } from "@clerk/nextjs";

export function SelectOrgPage() {
  return (
    <OrganizationList
      afterSelectOrganizationUrl="/admin"
      afterSelectPersonalUrl="/dashboard"
    />
  );
}

export default SelectOrgPage;
