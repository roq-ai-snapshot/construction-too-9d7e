interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View list of construction tools for rent.',
    'View list of outlets.',
    'Place a rental order for a construction tool.',
  ],
  ownerAbilities: [
    'Manage a new Company',
    'Invite an Admin',
    'Manage the list of construction tools for rent',
    'Manage the list of outlets',
  ],
};
