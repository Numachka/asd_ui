-- users tables data:
insert into user (user_id, full_name, birth_date, email, gender)
values 
(1, 'Lebron James', '1991-02-24', 'Leb@gmail.com', 'Female'),
(2, 'Kobe Bryant', '1985-03-12', 'Kobe@gmail.com', 'Female'),
(3, 'Itay Danino', '1994-08-07', 'Itay@gmail.com', 'Male'),
(4, 'Ron Borower', '2012-02-24', 'Ron@gmail.com', 'Male'),
(5, 'Nahum Kletkin', '1994-03-12', 'Nahum@gmail.com', 'Male');

select * from buttons;
-- buttons tables data:
insert into buttons (button_id, action_type, width, height)
values 
(1, 'sign in', '15', '30'),
(2, 'sign up', '20', '30'),
(3, 'call', '15', '30');

select * from headers;
-- headers tables data:
insert into headers (header_id, width, height)
values 
(1, '25', '30'),
(2, '20', '30'),
(3, '30', '30');

select * from cards;
-- cards tables data:
insert into cards (card_id, name, width, height, color)
values 
(1, 'login', '10', '15', 'blue'),
(2, 'register', '10', '15', 'gray'),
(3, 'call', '30', '50', 'green');

select * from pictures;
-- pictures tables data:
insert into pictures (picture_id, url, width, height)
values 
(1, null, '100', '100'),
(2, null, '100', '100'),
(3, null, '100', '100');
