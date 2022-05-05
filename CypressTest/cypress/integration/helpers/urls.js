const baseUrl = 'http://localhost:2368';

const adminUrl = `${baseUrl}/ghost/#`;
const adminUrls = {
    loginUrl: `${adminUrl}/signin`,
    dasboardUrl: `${adminUrl}/dashboard`,
    postUrls: {
        postEditorUrl: `${adminUrl}/editor/post`,
        postListUrl: `${adminUrl}/posts`,
    },
};

// admin.user@test.com
// Admin@Test$MISW4103

export {adminUrls}