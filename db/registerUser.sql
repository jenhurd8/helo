INSERT INTO helousers
    (username, password)
OUTPUT
Inserted.ID
VALUES
    ($1, $2);

-- SELECT *
-- FROM helousers;