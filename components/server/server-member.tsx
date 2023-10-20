import { Member, Profile, Server } from "@prisma/client";

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}

export const ServerMember = ({ member, server }: ServerMemberProps) => {
  return <div>ServerMember</div>;
};
