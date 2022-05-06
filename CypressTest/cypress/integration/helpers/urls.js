const baseUrl = 'http://localhost:2368';

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
    }
};

// admin.user@test.com
// Admin@Test$MISW4103

export {adminUrls}