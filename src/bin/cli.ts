#!/usr/bin/env node

import { Gitlab } from "@gitbeaker/rest";

const api = new Gitlab({
  host: "https://gitlab.cee.redhat.com/service/uhc-portal",
  token: "1ENDDYA1gioU1S54o6so",
});

// Listing users
api.MergeRequests.all().then((mrs: unknown[]) =>
  // eslint-disable-next-line no-console
  mrs.forEach((mr: unknown) => console.log("MR", mr))
);
