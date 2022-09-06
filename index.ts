import "./endpoints/users/index";
import "./endpoints/skills";
import "./endpoints/teams";
import "./endpoints/req";
import "./endpoints/suggestions";
import "./endpoints/admin-only/pending-counts";
import "./endpoints/lists";

import { api } from "@airtasker/spot";


@api({
    name: "Goalngo"
  })
  class Api {}
