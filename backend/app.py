from flask import Flask, jsonify, make_response
import sys

app = Flask(__name__)
sys.set_int_max_str_digits(0)

@app.route('/api/v1/discretetime/<x>/<y>/<z>/<sigma>/<rho>/<beta>/<delta>', methods=['GET'])
def get_time_steps(x: str, y: str, z: str, sigma: str, rho: str, beta: str, delta: str):
    try:
        x = int(x)
        y = int(y)
        z = int(z)
        sigma = int(sigma)
        rho = int(rho)
        beta = int(beta)
        delta = int(delta)

        return {'data': get_time_steps_list(x, y, z, sigma, rho, beta, delta)}
    except ValueError:
        return create_response_object(f"Invalid number entered", "get", 400, "Bad Request")
    except Exception:
        return create_response_object("Could not complete request at this time. Please make sure your request is valid or try again later.", "get", 500, "Could not complete request at this time")

def get_time_steps_list(x: int, y: int, z: int, sigma: int, rho: int, beta: int, delta: int):
    result_list = [{
        "n": 0,
        "x": x,
        "y": y,
        "z": z
    }]
    for i in range(1,21):
        new_x = x + z * sigma * (y - x) * delta
        new_y = y + (x * (rho - z) - z * y) * delta
        new_z = z + ((x * y) - (beta * z)) * delta
        step_data = {
            "n": i,
            "x": new_x,
            "y": new_y,
            "z": new_z
        }
        result_list.append(step_data)
        x = new_x
        y = new_y
        z = new_z

    return result_list

def create_response_object(detail: str, method: str, status: int, title: str):
    '''Create a response object with the given details'''
    data = {
        "detail": detail,
        "method": method,
        "status": status,
        "title": title,
    }
    response = make_response(jsonify(data))
    response.status_code = status
    response.mimetype = 'application/json'
    
    return response