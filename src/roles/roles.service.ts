import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { where } from 'sequelize';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepositoty: typeof Role) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepositoty.create(dto);
        return role;
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepositoty.findOne({where: {value}});
        return role;
    }
}
