const uuid = require('uuid');
module.exports = {
    // eslint-disable-next-line no-unused-vars
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('settings', [{ id: uuid.v4(), name: 'assetTransfer', enabled: true, updatedAt: new Date() }]);
    },
    // eslint-disable-next-line no-unused-vars
    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('settings', { name: 'assetTransfer' });
    },
};
//# sourceMappingURL=20230706021025-add-assetTransfer-setting.js.map