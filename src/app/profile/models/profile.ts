export interface Profile {
  uid: string;
  email: string;
  displayName: string;
  hashtags: string[];
  admin: boolean;
  followerTotal: number;
  // follower: Profile[];
  followingTotal: number;
  // following: Profile[];
  groupsTotal: number;
  // groups: Groups[];
  postsTotal: number;
  // posts: Posts[];
  ideasTotal: number;
  // ideas: Ideas[];
  introduction?: string;
  profileImage: string;
  dateRegistration: string;
  politicalOrganisationNames: string[];
  localOrganisation: string;
  regionalOrganisation: string;
  nationalOrganisation: string;
  transnationalOrganisation: string;
}
