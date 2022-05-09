const baseUrl = 'http://localhost:2369';

const adminUrl = `${baseUrl}/ghost/#`;
const adminUrls = {
    loginUrl: `${adminUrl}/signin`,
    dasboardUrl: `${adminUrl}/dashboard`,
    editorUrl: `${adminUrl}/editor`,
    postUrls: {
        listUrl: `${adminUrl}/posts`,
    },
    pageUrls: {
        listUrl: `${adminUrl}/pages`
    },
    tagUrls: {
        listUrl: `${adminUrl}/tags`
    }
};
const userUrls = {
    homeUrl: baseUrl
};

// admin.user@test.com
// Admin@Test$MISW4103

export {adminUrls, userUrls}