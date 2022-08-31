import "./endpoints/users/index";
import "./endpoints/teams/index";
import "./endpoints/skills/index";
// import "./endpoints/skills";
// import "./endpoints/teams";
// import "./endpoints/req";
// import "./endpoints/suggestions";
// import "./endpoints/admin-only/pending-counts";

import { api } from "@airtasker/spot";

@api({
  name: "Goalngo",
})
class Api {}
