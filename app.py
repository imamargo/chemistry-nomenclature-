import flask
app = flask.Flask('Номенклатура неорганических веществ')

@app.route('/')
def start():
    return flask.render_template("start.html")

@app.route('/rules')
def rules():
    return flask.render_template("rules.html")

@app.route('/game')
def game():
    return flask.render_template("game.html")
app.run()
