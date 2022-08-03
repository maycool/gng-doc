import "./endpoints/users/index";
import "./endpoints/skills";
import "./endpoints/teams";
import "./endpoints/req";
import "./endpoints/suggestions";

import { api } from "@airtasker/spot";


@api({
    name: "Goalngo"
  })
  class Api {}
