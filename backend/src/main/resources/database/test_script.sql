## Basic UI filling script
insert into card (id, background_color)
values (1, '#ffffff' /* white */), /* Visual - Hyper */
       (2, '#bdeaee' /* turquoise */); /* Visual - Hypo */

insert into button (id, background_color, size, content, content_action, content_color, content_size)
values (1, '#ffa700' /* orange */, 'medium', 'Content', 'call 0524330984', '#000000' /* black */, 'medium'), /* Visual - Hyper */
       (2, '#009688' /* green */, 'very-large', 'Content', 'visit google.com', '#fffffff' /* green */, 'very-large'); /* Visual - Hypo */

insert into image (id, size, url)
values (1, 'medium', 'temp-woman.svg'), /* Visual - Hyper */
       (2, 'very-large', 'temp-woman.svg'); /* Visual - Hypo */

insert into user_interface (id, user_id, card_id, button_id, image_id)
values (1, 1, 1, 1, 1), /* Visual - Hyper */
       (2, 1, 2, 2, 2);/* Visual - Hypo */

insert into user (id, email, first_name, last_name, password, phone_number)
values (1, 'nahum@gmail.com', 'nahum', 'kletkin', '0123', '0524330984');

insert into user_setting (id, is_active, user_id)
values (1, true, 1);