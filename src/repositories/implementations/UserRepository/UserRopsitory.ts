import { User } from "../../../entities/User";
import { IUserRepository } from "../../IUserRepository";

import { PrismaClient } from '@prisma/client'
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

type ITokenData = {
  id: number;
  pass: string;
  time: string;
};

type INewPass = {
  email: string;
  password: string;
};

export class UserRopsitory implements IUserRepository {
  private prisma: PrismaClient = new PrismaClient();
  private crypt: Function = hash;
  private gToken: Function = sign;
  private verifyP: Function = compare;

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      }
    });

    return user;
  }

  async findByUser(id: any): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id
      }
    })
    return user;
  }

  async save(user: User): Promise<User> {
    const result = await this.prisma.user.create({
      data: user,
    });

    return result;
  }

  async encryptpass(password: string): Promise<string> {
    const result = await this.crypt(password, 1);

    return result;
  }

  async generateToken(data: ITokenData): Promise<string> {
    const token = await this.gToken({ userID: data.id }, data.pass, {
      subject: `${data.id}`,
      expiresIn: data.time,
    });

    return token;
  }

  async verifyPass(pass: string, passU: string): Promise<any> {
    const passw = await this.verifyP(pass, passU);
    return passw;
  }

  async recoveyPass(email: string, pass: string): Promise<INewPass> {
    const newpass = await this.encryptpass(pass);

    const res = await this.prisma.user.update({
      where: {
        email,
      },
      data: {
        password: newpass,
      },
      select: {
        email: true,
        password: true,
      },
    });

    return res;
  }



  async createCod(email: string, litros: number): Promise<any> {
    const crypto = require('crypto');
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    const cod = await crypto.randomBytes(4).toString('hex');
    user.cods.push({
      litros,
      cod
    })


    const cods = await this.prisma.user.update({
      where: { email },
      data: {
        cods: user.cods
      }
    })

    return cods

  }

  async DeleteCod(email: string, id: any): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    var isok = false
    user.cods.forEach((cod: any) => {
      if (cod.cod == id) {
        isok = true
        var indice = user.cods.indexOf(cod);

        while (indice >= 0) {

          user.cods.splice(indice, 1);

          indice = user.cods.indexOf(cod);

        }
      }
    });

    if (isok) {

      const cods = await this.prisma.user.update({
        where: { email },
        data: {
          cods: user.cods
        }
      })

      return cods


    } else {

      return { "error": "Codigo n??o encontrado!" }
    }




  }


}
