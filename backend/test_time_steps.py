import unittest
from app import app, get_time_steps_list
    
class TestTimeSteps(unittest.TestCase):
    def test_get_time_steps_list(self):
        # Test get_time_steps_list() method
        time_steps_list = get_time_steps_list(1,2,1,2,1,2,2)
        assert type(time_steps_list) == list

        assert time_steps_list[0]["n"] == 0
        assert time_steps_list[0]["x"] == 1
        assert time_steps_list[0]["y"] == 2
        assert time_steps_list[0]["z"] == 1

        assert time_steps_list[1]["n"] == 1
        assert time_steps_list[1]["x"] == 5
        assert time_steps_list[1]["y"] == -2
        assert time_steps_list[1]["z"] == 1

        assert time_steps_list[2]["n"] == 2
        assert time_steps_list[2]["x"] == -23
        assert time_steps_list[2]["y"] == 2
        assert time_steps_list[2]["z"] == -23

        assert time_steps_list[3]["n"] == 3
        assert time_steps_list[3]["x"] == -2323
        assert time_steps_list[3]["y"] == -1010
        assert time_steps_list[3]["z"] == -23
    
    def test_time_steps_200_response(self):
        # Valid numbers entered
        response = app.test_client().get('/api/v1/discretetime/1/2/1/2/1/2/2')
        assert response.status_code == 200
        assert response.content_type == 'application/json'

    def test_time_steps_400_response(self):
        # Invalid x entered
        response = app.test_client().get('/api/v1/discretetime/a/2/1/2/1/2/2')
        assert response.status_code == 400
        # Invalid y entered
        response = app.test_client().get('/api/v1/discretetime/1/a/1/2/1/2/2')
        assert response.status_code == 400
        # Invalid z entered
        response = app.test_client().get('/api/v1/discretetime/1/2/a/2/1/2/2')
        assert response.status_code == 400
        # Invalid sigma entered
        response = app.test_client().get('/api/v1/discretetime/1/2/1/a/1/2/2')
        assert response.status_code == 400
        # Invalid rho entered
        response = app.test_client().get('/api/v1/discretetime/1/2/1/2/a/2/2')
        assert response.status_code == 400
        # Invalid beta entered
        response = app.test_client().get('/api/v1/discretetime/1/2/1/2/1/a/2')
        assert response.status_code == 400
        # Invalid delta entered
        response = app.test_client().get('/api/v1/discretetime/1/2/1/2/1/2/a')
        assert response.status_code == 400
    
    def test_time_steps_404_response(self):
        # No numbers entered
        response = app.test_client().get('/api/v1/discretetime')
        assert response.status_code == 404

if __name__ == '__main__':
    unittest.main()
