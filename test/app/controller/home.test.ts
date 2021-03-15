/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-09-10 15:58:14
 * @LastEditors: 廖军
 * @LastEditTime: 2020-09-11 14:48:58
 */
import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /', async () => {
    const result = await app.httpRequest().get('/').expect(200);
    assert(result.text === 'hi, file node service');
  });
});
