import HttpService, { responseInterceptor } from '.';

describe('HTTP Service', () => {
  it('handles no config', () => {
    const httpService = new HttpService();

    expect(httpService.baseURL).toEqual('/api');
  });

  it('handles no a config without a baseURL', () => {
    const httpService = new HttpService({});

    expect(httpService.baseURL).toEqual('/api');
  });

  it('handles a baseURL config', () => {
    const httpService = new HttpService({ baseURL: '/tenant-api' });

    expect(httpService.baseURL).toEqual('/tenant-api');
  });

  it('returns the request body', () => {
    expect(responseInterceptor({ data: 'data' })).toEqual('data');
  });

  it('handles get requests', (done) => {
    const httpService = new HttpService({ baseURL: '/tenant-api' });
    httpService.http.get = () => Promise.resolve([{
      id: 123,
      displayName: 'Tenant',
    }]);

    httpService.get('/tenants/').then((tenants) => {
      expect(tenants).toEqual([{
        id: 123,
        displayName: 'Tenant',
      }]);
      done();
    });
  });

  it('handles delete requests', (done) => {
    const httpService = new HttpService({ baseURL: '/tenant-api' });
    httpService.http.delete = () => Promise.resolve('deleted');

    httpService.delete('/tenants/name').then((response) => {
      expect(response).toEqual('deleted');
      done();
    });
  });

  it('handles post requests', (done) => {
    const httpService = new HttpService({ baseURL: '/tenant-api' });
    httpService.http.post = () => Promise.resolve([{
      id: 123,
      displayName: 'Tenant',
    }]);

    httpService.post('/tenants/', {}).then((tenants) => {
      expect(tenants).toEqual([{
        id: 123,
        displayName: 'Tenant',
      }]);
      done();
    });
  });

  it('handles put requests', (done) => {
    const httpService = new HttpService({ baseURL: '/tenant-api' });
    httpService.http.put = () => Promise.resolve([{
      id: 123,
      displayName: 'Tenant',
    }]);

    httpService.put('/tenants/', {}).then((tenants) => {
      expect(tenants).toEqual([{
        id: 123,
        displayName: 'Tenant',
      }]);
      done();
    });
  });

  it('handles patch requests', (done) => {
    const httpService = new HttpService({ baseURL: '/tenant-api' });
    httpService.http.patch = () => Promise.resolve([{
      id: 123,
      displayName: 'Tenant',
    }]);

    httpService.patch('/tenants/', {}).then((tenants) => {
      expect(tenants).toEqual([{
        id: 123,
        displayName: 'Tenant',
      }]);
      done();
    });
  });
});
