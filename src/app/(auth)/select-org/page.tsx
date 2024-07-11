import { OrganizationList } from "@clerk/nextjs";

export default function SelectOrgPage() {
  return (
    <OrganizationList
      afterSelectOrganizationUrl="/admin"
      afterSelectPersonalUrl="/dashboard"
    />
  );
}
