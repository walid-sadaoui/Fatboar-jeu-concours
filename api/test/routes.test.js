  
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { expect } = chai;
let jwt = '';
chai.use(chaiHttp);

describe('App', () => {
  it('Should exists', () => {
    expect(app).to.be.a('function');})
})

describe('Auth Endpoints', () => {
  describe('POST /auth/register', () => {
    it('should create a new client', (done) => {
      chai.request(app)
        .post('/auth/register')
        .send({
          "firstName": "Harvey",
          "lastName": "Specter",
          "password": "oepxkfjr21!",
          "email": "h.specter@gmail.com",
          "phone": "0635465321"
        })
        .end((err,res) => {
          expect(res).to.have.status(200);
          expect(res.body.userSaved.role).to.equal('CLIENT');
          done();
        });
    });
    it('should return 409 email already exists', (done) => {
      chai.request(app)
        .post('/auth/register')
        .send({
          "firstName": "Harvey",
          "lastName": "Specter",
          "password": "oepxkfjr21!",
          "email": "h.specter@gmail.com",
          "phone": "0635465321"
        })
        .end((err,res) => {
          expect(res).to.have.status(409);
          expect(res.body.msg).to.equal('Email already exists');
          done();
        });
    });
  });

  describe('POST /auth/login', () => {
    it('should login successfully', (done) => {
      chai.request(app)
        .post('/auth/login')
        .send({
          "email": "h.specter@gmail.com",
          "password": "oepxkfjr21!"
        })
        .end((err,res) => {
          expect(res).to.have.status(200);
          expect(res.body.msg).to.equal('User is logged');
          done();
        })
    })
  })
})

describe('Users Endpoints', () => {
  before(function(done){
    chai.request(app)
      .post('/auth/login')
      .send({
        "email": "h.specter@gmail.com",
        "password": "oepxkfjr21!"
      })
      .end(function(err, res){
        jwt = res.body.token;
        expect(res).to.have.status(200);
        expect(res.body.msg).to.equal('User is logged');
        done();
      });
  });
  describe('GET /users', () => {
    it('should return all the users', (done) => {
      chai.request(app)
      .post('/auth/login')
      .send({
        "email": "eric.bourdon@fatboar.site",
        "password": "admin"
      })
      .end(function(err, res){
        const adminJwt = res.body.token;
        chai.request(app)
        .get('/users')
        .set('Authorization', 'Bearer ' + adminJwt)
        .end((err,res) => {
          expect(res).to.have.status(200);
          expect(res.body.msg).to.equal('All Users');
          done();
        })
      });
    })
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
        .get('/users')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(403);
          expect(res.text).to.equal('Access Denied');
          done();
        })
    })
  })
  
  describe('GET /users/:idUser', () => {
    it('should return the user specified by idUser', (done) => {
      chai.request(app)
        .get('/users/13')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(200);
          done();
        })
    })
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
        .get('/users/11')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(403);
          done();
        })
    })
  })
  
  describe('GET /users/:idUser/tickets', () => {
    it('should return all tickets associated to the user specified by idUser', (done) => {
      chai.request(app)
      .post('/auth/login')
      .send({
        "email": "eric.bourdon@fatboar.site",
        "password": "admin"
      })
      .end(function(err, res){
        const adminJwt = res.body.token;
        chai.request(app)
        .get('/users/12/tickets')
        .set('Authorization', 'Bearer ' + adminJwt)
        .end((err,res) => {
            expect(res).to.have.status(200);
            done();
        })
      });
    })
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
        .get('/users/12/tickets')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(403);
          done();
        })
    })
  })

  describe('PUT /users/:idUser', () => {
    it('should update the user info', (done) => {
      chai.request(app)
        .put('/users/13')
        .send({
          "phone": "0614236457"
        })
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(200);
          expect(res.body.updatedUser.phone).to.equal("0614236457");
          done();
        })
    })
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
        .put('/users/12')
        .send({
          "phone": "0614236458"
        })
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(403);
          done();
        })
    })
  })
  
  describe('PUT /users/:idUser/ticket', () => {
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
        .put('/users/12/ticket')
        .set('Authorization', 'Bearer ' + jwt)
        .send({
          "ticketNumber": "1111111465"
        })
        .end((err,res) => {
          expect(res).to.have.status(403);
          done();
        })
    })
    it('should associate the ticket with an user', (done) => {
      chai.request(app)
        .put('/users/13/ticket')
        .set('Authorization', 'Bearer ' + jwt)
        .send({
          "ticketNumber": "1111111464"
        })
        .end((err,res) => {
          expect(res).to.have.status(200);
          done();
        })
    })
    it('should return 422 Invalid ticket', (done) => {
      chai.request(app)
        .put('/users/13/ticket')
        .set('Authorization', 'Bearer ' + jwt)
        .send({
          "ticketNumber": "1111111111"
        })
        .end((err,res) => {
          expect(res).to.have.status(422);
          done();
        })
    })
  })

  describe('DELETE /users/:idUser', () => {
    it('should delete the user specified by idUser', (done) => {
      chai.request(app)
        .delete('/users/13')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(200);
          done();
        })
    })
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
        .delete('/users/12')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(403);
          done();
        })
    })
  })
})

describe('Tickets Endpoints', () => {
  before(function(done){
    chai.request(app)
      .post('/auth/login')
      .send({
        "email": "eric.bourdon@fatboar.site",
        "password": "admin"
      })
      .end(function(err, res){
        jwt = res.body.token;
        expect(res).to.have.status(200);
        expect(res.body.msg).to.equal('User is logged');
        done();
      });
  });
  describe('GET /tickets', () => {
    it('should return al the tickets ', (done) => {
      chai.request(app)
        .post('/auth/login')
        .send({
          "email": "mike.ross@gmail.com",
          "password": "client"
        })
        .end((err,res) => {
          const clientJwt = res.body.token;
          chai.request(app)
            .get('/tickets')
            .set('Authorization', 'Bearer ' + clientJwt)
            .end((err,res) => {
              expect(res).to.have.status(403);
              done();
            })
        })
    })
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
        .get('/tickets')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  
  describe('GET /tickets/:ticketNumber', () => {
    it('should return the ticket specified by ticketNumber', (done) => {
      chai.request(app)
        .get('/tickets/1111111111')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
      .post('/auth/login')
      .send({
        "email": "mike.ross@gmail.com",
        "password": "client"
      })
      .end(function(err, res){
        const userJwt = res.body.token;
        chai.request(app)
        .get('/tickets/1111111111')
        .set('Authorization', 'Bearer ' + userJwt)
        .end((err,res) => {
          expect(res).to.have.status(403);
          done();
        });
      });
    });
  });
  
  describe('PUT /tickets/:ticketNumber', () => {
    it('should return 404 ticket not found', (done) => {
      chai.request(app)
        .put('/tickets/2111111111')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
      .post('/auth/login')
      .send({
        "email": "mike.ross@gmail.com",
        "password": "client"
      })
      .end(function(err, res){
        const userJwt = res.body.token;
        chai.request(app)
        .put('/tickets/1111111111')
        .set('Authorization', 'Bearer ' + userJwt)
        .end((err,res) => {
          expect(res).to.have.status(403);
          done();
        });
      });
    });
    it('should return 200 and update the ticket specified by ticketNumber', (done) => {
      chai.request(app)
        .put('/tickets/1111111444')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  
  describe('DELETE /tickets/:ticketNumber', () => {
    it('should return the ticket specified by ticketNumber', (done) => {
      chai.request(app)
        .delete('/tickets/1111111111')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
      .post('/auth/login')
      .send({
        "email": "mike.ross@gmail.com",
        "password": "client"
      })
      .end(function(err, res){
        const userJwt = res.body.token;
        chai.request(app)
        .delete('/tickets/1111111111')
        .set('Authorization', 'Bearer ' + userJwt)
        .end((err,res) => {
          expect(res).to.have.status(403);
          done();
        });
      });
    });
  });
  
  describe('GET /tickets/:ticketNumber/gain', () => {
    it('should return the gain specified by ticketNumber', (done) => {
      chai.request(app)
        .get('/tickets/1111111112/gain')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should return 403 Access Denied', (done) => {
      chai.request(app)
      .post('/auth/login')
      .send({
        "email": "mike.ross@gmail.com",
        "password": "client"
      })
      .end(function(err, res){
        const userJwt = res.body.token;
        chai.request(app)
        .get('/tickets/1111111112/gain')
        .set('Authorization', 'Bearer ' + userJwt)
        .end((err,res) => {
          expect(res).to.have.status(403);
          done();
        });
      });
    });
    it('should return 404 Ticket not found', (done) => {
      chai.request(app)
        .get('/tickets/2111111111/gain')
        .set('Authorization', 'Bearer ' + jwt)
        .end((err,res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
