import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService {
  constructor() {
    this.provinceRepository = new ProvinceRepository();
  }

  async getAllAsync() {
    return await this.provinceRepository.getAllAsync();
  }

  async getByIdAsync(id) {
    return await this.provinceRepository.getByIdAsync(id);
  }

  async createAsync(entity) {
    return await this.provinceRepository.createAsync(entity);
  }

  async updateAsync(id, entity) {
    return await this.provinceRepository.updateAsync(id, entity);
  } 

  async deleteByIdAsync(id) {
    return await this.provinceRepository.deleteByIdAsync(id);
  }
}
