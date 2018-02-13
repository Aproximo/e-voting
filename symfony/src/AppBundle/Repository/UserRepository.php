<?php

namespace AppBundle\Repository;

/**
 * UserRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class UserRepository extends \Doctrine\ORM\EntityRepository
{
    /**
     * @param $key
     * @param $value
     * @return array
     */
    public function getRoles($value){

        $return = $this->getEntityManager()
            ->createQuery(
                "SELECT user FROM AppBundle:User user  WHERE user.roles LIKE :value "
            )
            ->setParameter( 'value', "%$value%")
            ->getResult();

        return $return;

    }

    public function getByPassportId($value){

        $return = $this->getEntityManager()
            ->createQuery(
                "SELECT user FROM AppBundle:User user  WHERE user.passport_id = :value "
            )
            ->setParameter( 'value', "$value")
            ->getResult();

        return $return;

    }

}
