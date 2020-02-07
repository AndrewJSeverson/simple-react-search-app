
import axios from 'axios';

export default {
  get: jest.fn().mockResolvedValue({ data: {} }),
  create: () => axios,
  defaults: { adapter: {} },
};
