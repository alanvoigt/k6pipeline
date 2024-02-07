import http from 'k6/http';
import { check, sleep } from 'k6';


export let options = {
    vus: 1, // 1 usuário virtual
    duration: '10s', // Executar por 10 segundos
};

export default function () {
  let response = http.get('http://test.k6.io');
  check(response, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
