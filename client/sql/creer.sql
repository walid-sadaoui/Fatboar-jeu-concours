CREATE TYPE etat AS ENUM ('en ligne', 'hors ligne');
CREATE TYPE type AS ENUM ('client', 'employe', 'responsable');
CREATE TYPE etatticket AS ENUM ('utilise', 'enregistre', 'non utilise');

CREATE SEQUENCE public.internaute_id_seq1;

CREATE TABLE public.Internaute (
                id INTEGER NOT NULL DEFAULT nextval('public.internaute_id_seq1'),
                Nom VARCHAR(50) NOT NULL,
                Prenom VARCHAR(50) NOT NULL,
                Username VARCHAR NOT NULL,
                Password VARCHAR(50) NOT NULL,
                Mail VARCHAR(50) NOT NULL,
                Telephone INTEGER NOT NULL,
		etat etat,
		type type,
                CONSTRAINT internaute_pk PRIMARY KEY (id)
);


ALTER SEQUENCE public.internaute_id_seq1 OWNED BY public.Internaute.id;

CREATE UNIQUE INDEX internaute_idx
 ON public.Internaute
 ( id );

CREATE SEQUENCE public.client_id_seq_3;

CREATE TABLE public.Client (
                idclient INTEGER NOT NULL DEFAULT nextval('public.client_id_seq_3'),
                id INTEGER NOT NULL,
                CONSTRAINT client_pk PRIMARY KEY (idclient, id)
);


ALTER SEQUENCE public.client_id_seq_3 OWNED BY public.Client.idclient;

CREATE UNIQUE INDEX client_idx
 ON public.Client
 ( idclient );

CREATE TABLE public.Adresse (
                id INTEGER NOT NULL,
                idclient INTEGER NOT NULL,
                Numero INTEGER NOT NULL,
                Rue INTEGER(50) NOT NULL,
                CodePostal INTEGER(50) NOT NULL,
                Ville VARCHAR(50) NOT NULL,
                Pays VARCHAR(50) NOT NULL,
                CONSTRAINT adresse_pk PRIMARY KEY (id, idclient)
);


CREATE SEQUENCE public.tickettas_id_seq;

CREATE TABLE public.TicketTAS (
                id INTEGER NOT NULL DEFAULT nextval('public.tickettas_id_seq'),
                NumTicketTirage INTEGER NOT NULL,
                idclient INTEGER NOT NULL,
                CONSTRAINT tickettas_pk PRIMARY KEY (id)
);


ALTER SEQUENCE public.tickettas_id_seq OWNED BY public.TicketTAS.id;

CREATE TABLE public.HistoriqueParticipation (
                id INTEGER NOT NULL,
                idclient INTEGER NOT NULL,
                CONSTRAINT historiqueparticipation_pk PRIMARY KEY (id)
);


CREATE SEQUENCE public.ticket_id_seq1;

CREATE TABLE public.Ticket (
                idticket INTEGER NOT NULL DEFAULT nextval('public.ticket_id_seq1'),
                id INTEGER NOT NULL,
                Numero INTEGER NOT NULL,
                Code INTEGER NOT NULL,
                DateUtilisation TIMESTAMP NOT NULL,
                DateCreation TIMESTAMP NOT NULL,
                Photo VARCHAR NOT NULL,
                idclient INTEGER NOT NULL,
		etatticket etatticket, 
                CONSTRAINT ticket_pk PRIMARY KEY (idticket, id)
);


ALTER SEQUENCE public.ticket_id_seq1 OWNED BY public.Ticket.idticket;

CREATE UNIQUE INDEX ticket_idx
 ON public.Ticket
 ( idticket );

CREATE TABLE public.Gain (
                id INTEGER NOT NULL,
                idticket INTEGER NOT NULL,
                Nom VARCHAR NOT NULL,
                Probabilite INTEGER NOT NULL,
                CONSTRAINT gain_pk PRIMARY KEY (id, idticket)
);


CREATE SEQUENCE public.fatboar_idemploye_seq1;

CREATE TABLE public.FatBoar (
                idEmploye INTEGER NOT NULL DEFAULT nextval('public.fatboar_idemploye_seq1'),
                internaute_id INTEGER NOT NULL,
                CONSTRAINT fatboar_pk PRIMARY KEY (idEmploye, internaute_id)
);


ALTER SEQUENCE public.fatboar_idemploye_seq1 OWNED BY public.FatBoar.idEmploye;

CREATE UNIQUE INDEX fatboar_idx
 ON public.FatBoar
 ( idEmploye );

CREATE SEQUENCE public.responsablefatboar_id_seq;

CREATE TABLE public.ResponsableFatBoar (
                idEmploye INTEGER NOT NULL,
                id INTEGER NOT NULL DEFAULT nextval('public.responsablefatboar_id_seq'),
                CONSTRAINT responsablefatboar_pk PRIMARY KEY (idEmploye, id)
);


ALTER SEQUENCE public.responsablefatboar_id_seq OWNED BY public.ResponsableFatBoar.id;

ALTER TABLE public.FatBoar ADD CONSTRAINT internaute_fatboar_fk
FOREIGN KEY (internaute_id)
REFERENCES public.Internaute (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.Client ADD CONSTRAINT internaute_client_fk
FOREIGN KEY (id)
REFERENCES public.Internaute (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.HistoriqueParticipation ADD CONSTRAINT client_historiqueparticipation_fk
FOREIGN KEY (idclient)
REFERENCES public.Client (idclient)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.Ticket ADD CONSTRAINT client_ticket_fk
FOREIGN KEY (idclient)
REFERENCES public.Client (idclient)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.TicketTAS ADD CONSTRAINT client_tickettas_fk
FOREIGN KEY (idclient)
REFERENCES public.Client (idclient)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.Adresse ADD CONSTRAINT client_adresse_fk
FOREIGN KEY (idclient)
REFERENCES public.Client (idclient)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.Ticket ADD CONSTRAINT historiqueparticipation_ticket_fk
FOREIGN KEY (id)
REFERENCES public.HistoriqueParticipation (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.Gain ADD CONSTRAINT ticket_gain_fk
FOREIGN KEY (idticket)
REFERENCES public.Ticket (idticket)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.ResponsableFatBoar ADD CONSTRAINT fatboar_responsablefatboar_fk
FOREIGN KEY (idEmploye)
REFERENCES public.FatBoar (idEmploye)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;


