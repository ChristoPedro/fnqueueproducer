import http from 'k6/http';

export default function () {
  const url = '<Endpoint>';
  const payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}

export const options = {
    scenarios: {
      first: {
        exec: 'default',
        executor: 'ramping-arrival-rate',
        timeUnit: '1s',
        preAllocatedVUs: 2000,
        startRate: 50, // 100 requests per second
        stages: [
                {target: 100, duration: '30s'},
                {target: 200, duration: '30s'},
                {target: 300, duration: '30s'},
                {target: 600, duration: '30s'},
                {target: 800, duration: '30s'},
                {target: 600, duration: '20s'}
        ]
      }
    }
  };