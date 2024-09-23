import { Role, User } from '@prisma/client';

export function defineAbility(user: User, userRoles: Role[]) {
  userRoles.forEach((userRole) => {
    const rolePermissions = userRole.permissions;
    rolePermissions.forEach((permission) => {
      switch (permission.name)
    })
  });
}
