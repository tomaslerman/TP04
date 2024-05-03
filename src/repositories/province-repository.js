import pkg from 'pg'
import  {Province,provincias_argentinas } from '../entities/province.js';
const { Client, Pool } = pkg;
  
  export default class ProvinceRepository {
    async getAllAsync() {
      return provincias_argentinas;
    }
  
    async getByIdAsync(id) {
      return provincias_argentinas.find(provincia => provincia.id === parseInt(id));
    }
  
    async createAsync(entity) {
      provincias_argentinas.push(new Province(entity.id, entity.name, entity.full_name, entity.latitude, entity.longitude, entity.display_order));
      return this.getAllAsync();
    }
  
    async updateAsync(entity) {
        const index = provincias_argentinas.findIndex(provincia => provincia.id === entity.id);
        if (index !== -1) {
            provincias_argentinas[index] = { ...provincias_argentinas[index], ...entity };
            return this.getAllAsync();
        }
        return this.getAllAsync();
    }
    
  
    async deleteByIdAsync(id) {
      const index = provincias_argentinas.findIndex(provincia => provincia.id === parseInt(id));
      if (index !== -1) {
        provincias_argentinas.splice(index, 1);
      }
      return this.getAllAsync();
    }
  }
  